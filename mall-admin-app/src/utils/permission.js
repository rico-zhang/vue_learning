/**
 * 角色对应的权限
 */
const roleToRouter = {
  coustomer: [{
    name: 'Product',
  }, {
    name: 'ProductList',
  }, {
    name: 'ProductAdd',
  },
  {
    name: 'ProductEdit',
  }],
  admin: [{
    name: 'Product',
  }, {
    name: 'ProductList',
  }, {
    name: 'ProductAdd',
  }, {
    name: 'Category',
  },
  {
    name: 'ProductEdit',
  }],
};

/**
 * @description 根据权限过滤路由
 * @param {String} role
 * @param {Array} routes
 */
export default function getMenuRoute(role, routes) {
  const allowRoutesName = roleToRouter[role].map((item) => item.name);
  const resultRoutes = routes.filter((r) => {
    const obj = r;
    if (allowRoutesName.includes(r.name)) {
      const { children } = obj;
      obj.children = children.filter((c) => allowRoutesName.includes(c.name));
      return true;
    }
    return false;
  });
  return resultRoutes;
}
