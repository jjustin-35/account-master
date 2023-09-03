const formDataHandler = (form: HTMLFormElement) => {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const convertedData = Object.keys(data).reduce((acc, key) => {
    const value = data[key];

    if (value instanceof File) {
      return {
        ...acc,
        [key]: value,
      };
    }

    return {
      ...acc,
      [key]: value,
    };
  }, {});

  return convertedData;
};

export default formDataHandler;
