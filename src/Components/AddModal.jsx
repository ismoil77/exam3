import React, { useState } from 'react';
import { Modal, Button, Form, Input, message } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const API = 'https://to-dos-api.softclub.tj/api/to-dos';

const AddModal = ({getData}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      images: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      description: Yup.string().required('Description is required'),
      images: Yup.mixed().required('Image is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append('Name', values.name);
      formData.append('Description', values.description);
      formData.append('Images', values.images); 

      try {
        await axios.post(API, formData);
        getData()
        resetForm();
        setIsModalOpen(false);
      } catch (error) {
        console.error(error);
        
      }
    },
  });

  return (
    <>
      <Button type="primary" onClick={showModal}>Add</Button>
      <Modal
        title="Add New"
        open={isModalOpen}
        onOk={formik.handleSubmit}
        onCancel={handleCancel}
        okText="Submit"
      >
        <Form layout="vertical">
          <Form.Item label="Name"
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

          <Form.Item label="Description"
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

          <Form.Item label="Image"
            validateStatus={formik.errors.images && formik.touched.images ? 'error' : ''}
            help={formik.touched.images && formik.errors.images}
          >
            <input
              name="images"
              type="file"
              accept="image/*"
              onChange={(e) => {
                formik.setFieldValue('images', e.target.files[0]);
              }}
              onBlur={formik.handleBlur}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddModal;
