function createSinglePage(
  this: any,
  edge: { node: any },
  index: number,
  arr: Array<{ node: any }>,
  template: string,
  isPrint: boolean,
): void {
  const { node } = edge;
  const path = node.fields.path;

  console.log('========================');
  console.log(`create page: ${path}`);

  const isFirst = index === 0;
  const isLast = index === arr.length - 1;

  let prev;
  let next;

  if (!isFirst) {
    const n = arr[index - 1].node;
    prev = {
      name: n.title || n.frontmatter.title,
      url: n.fields.path,
    };
  }

  if (!isLast) {
    const n = arr[index + 1].node;
    next = {
      name: n.title || n.frontmatter.title,
      url: n.fields.path,
    };
  }

  this._createPage({
    path,
    component: template,
    context: {
      pathname: path,
      id: node.id,
      prev,
      next,
      isPrint: false,
    },
  });

  if (isPrint) {
    this._createPage({
      path: `${path}/print`,
      component: template,
      context: {
        pathname: path,
        id: node.id,
        isPrint: true,
      },
    });
  }
  console.log('OK');
}

export default createSinglePage;
