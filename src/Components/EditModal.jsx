import React, { useState } from 'react';
import { Modal, Form, Input, message } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const EditModal = ({ open, onClose, initialData}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
   
    initialValues: {
      id: initialData?.id || 0,
      name: initialData?.name || '',
      description: initialData?.description || '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      description: Yup.string().required('Description is required'),
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        await axios.put(`https://to-dos-api.softclub.tj/api/to-dos`, values, {
          headers: { 'Content-Type': 'application/json' },
        });
      
        onClose();
        setIsSubmitting(false);
      } catch (error) {
        console.error(error);
		  
      }
     
    },
  });

  return (
    <Modal
      title="Edit"
      open={open}
      onCancel={onClose}
      onOk={formik.handleSubmit}
      okText={isSubmitting ? 'Saving...' : 'Save'}
      confirmLoading={isSubmitting}
    >
      <Form layout="vertical">
        <Form.Item
          label="Name"
          validateStatus={formik.errors.name && formik.touched.name ? 'error' : ''}
          help={formik.touched.name && formik.errors.name}
        >
          <Input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <Form.Item
          label="Description"
          validateStatus={formik.errors.description && formik.touched.description ? 'error' : ''}
          help={formik.touched.description && formik.errors.description}
        >
          <Input.TextArea
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
