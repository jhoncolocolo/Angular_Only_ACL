export interface RequestAuth {
  email:        string;
  name:       string;
  role:       string;
  permissions: PermissionAuth[];
}

interface PermissionAuth {
  user_id:     number;
  role:        string;
  route:       string;
  path:        string;
  description: string;
}
