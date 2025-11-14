//*  enum

enum UaerRole {
  Admin = "Admin",
  Ediotr = "Editor",
  Viewer = "Viewer",
}

const canEdit = (role: UaerRole) => {
  if (role === UaerRole.Admin || role === UaerRole.Ediotr) {
    return true;
  }
  return false;
};

console.log(canEdit(UaerRole.Admin));  // output --> [true]
