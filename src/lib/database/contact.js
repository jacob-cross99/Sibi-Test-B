const model = (sequelize, DataTypes) => {
  let Contact = sequelize.define('Contact', {
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    company: {
      type: DataTypes.STRING,
      default: null
    },
    message: {
      type: DataTypes.STRING
    }
  });

  Contact.associate = (models) => {
  };

  return Contact;
};

export default model;
