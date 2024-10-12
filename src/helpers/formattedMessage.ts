const formatMessage = (template: string, values: any) => {
  return template.replace(/\$(\w+)/g, (_, key) => {
    return key in values ? values[key] : `$${key}`;
  });
};

export default formatMessage;
