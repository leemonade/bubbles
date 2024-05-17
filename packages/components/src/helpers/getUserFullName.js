function getUserFullName(user) {
  return `${user.secondSurname ? `${user.secondSurname} ` : ''}${
    user.surnames ? user.surnames : ''
  }${user.secondSurname || user.surnames ? ',' : ''} ${user.name}`;
}

export { getUserFullName };
