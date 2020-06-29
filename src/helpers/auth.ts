
export const isAuthenticated = (user: any) => !!user;

export const isAllowed = (user: { rights: string | any[]; }, rights: any[]) =>
  rights.some(right => user.rights.includes(right));

export const hasRole = (user: { roles: string | any[]; }, roles: any[]) =>
  roles.some(role => user.roles.includes(role));
