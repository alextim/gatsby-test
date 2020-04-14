import { useEffect, useState, lazy } from 'react';
/**
 * 
 * https://levelup.gitconnected.com/4-custom-hooks-to-boost-your-react-app-d54aefe34061
 * 
 * https://reactjs.org/docs/code-splitting.html
 * https://blog.bitsrc.io/lazy-loading-react-components-with-react-lazy-and-suspense-f05c4cfde10c
 * 
 * https://github.com/gregberge/loadable-components
 * https://github.com/gregberge/loadable-components/blob/master/packages/server/README.md
 * 
 */
const usePrefetch (factory: any) => {
  const [component, setComponent] = useState(null);

  useEffect(() => {
    factory();
    const comp = lazy(factory);
    setComponent(comp);
  }, [factory]);

  return component;
}

export default usePrefetch;
