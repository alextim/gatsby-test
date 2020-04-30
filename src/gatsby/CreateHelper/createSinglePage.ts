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
  console.log(`create page: ${node.fields.slug}`);

  const isFirst = index === 0;
  const isLast = index === arr.length - 1;

  let prev;
  let next;

  if (!isFirst) {
    prev = {
      name: arr[index - 1].node.title || arr[index - 1].node.frontmatter.title,
      url: arr[index - 1].node.fields.slug,
    };
  }

  if (!isLast) {
    next = {
      name: arr[index + 1].node.title || arr[index + 1].node.frontmatter.title,
      url: arr[index + 1].node.fields.slug,
    };
  }

  this._createPage({
    path: node.fields.slug,
    component: template,
    context: {
      pathname: node.fields.slug,
      id: node.id,
      prev,
      next,
      isPrint: false,
    },
  });

  if (isPrint) {
    this._createPage({
      path: `${node.fields.slug}/print`,
      component: template,
      context: {
        pathname: node.fields.slug,
        id: node.id,
        isPrint: true,
      },
    });
  }
  console.log('OK');
}

export default createSinglePage;
