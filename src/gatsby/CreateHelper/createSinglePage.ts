function createSinglePage(
  this: any,
  edge: any,
  index: number,
  arr: Array<any>,
  template: string,
  isPrint: boolean,
): void {
  const { node } = edge;
  console.log('========================');
  console.log(`create page: ${node.fields.path}`);

  const isFirst = index === 0;
  const isLast = index === arr.length - 1;

  let prev;
  let next;

  if (!isFirst) {
    prev = {
      name: arr[index - 1].node.title || arr[index - 1].node.frontmatter.title,
      url: arr[index - 1].node.fields.path,
    };
  }

  if (!isLast) {
    next = {
      name: arr[index + 1].node.title || arr[index + 1].node.frontmatter.title,
      url: arr[index + 1].node.fields.path,
    };
  }

  this._createPage({
    path: node.fields.path,
    component: template,
    context: {
      pathname: node.fields.path,
      id: node.id,
      prev,
      next,
      isPrint: false,
    },
  });

  if (isPrint) {
    this._createPage({
      path: `${node.fields.path}/print`,
      component: template,
      context: {
        pathname: node.fields.path,
        id: node.id,
        isPrint: true,
      },
    });
  }
  console.log('OK');
}

export default createSinglePage;
