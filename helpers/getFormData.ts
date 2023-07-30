import { isEmpty } from '@/helpers/object';

export type FormRefType = React.MutableRefObject<{
  [key: string]: HTMLInputElement;
}>;

const getFormData = (ref: FormRefType) => {
  const formDataRef = ref.current;
  if (isEmpty(formDataRef)) return null;

  const formData = Object.keys(formDataRef).reduce((data, key) => {
    const input = formDataRef[key];
    const value = input.value;
    return { ...data, [key]: value };
  }, {});

  return formData;
};

export default getFormData;
