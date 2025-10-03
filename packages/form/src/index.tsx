import React, { useState } from 'react';
import { Form as AntdForm, Button, message } from 'antd';
import type { FormProps as AntdFormProps, FormInstance } from 'antd';
import classNames from 'classnames';
import './style.css';

export interface FormProps extends AntdFormProps {
  /** 自定义样式类名 */
  className?: string;
  /** 是否启用自动保存 */
  autoSave?: boolean;
  /** 自动保存间隔（毫秒） */
  autoSaveInterval?: number;
  /** 是否显示提交按钮 */
  showSubmitButton?: boolean;
  /** 提交按钮文本 */
  submitText?: string;
  /** 是否启用表单验证动画 */
  validationAnimation?: boolean;
  /** 自动保存回调 */
  onAutoSave?: (values: any) => void;
}

const Form: React.FC<FormProps> & {
  Item: typeof AntdForm.Item;
  List: typeof AntdForm.List;
  ErrorList: typeof AntdForm.ErrorList;
  Provider: typeof AntdForm.Provider;
  useForm: typeof AntdForm.useForm;
  useFormInstance: typeof AntdForm.useFormInstance;
  useWatch: typeof AntdForm.useWatch;
} = ({ 
  className, 
  autoSave = false,
  autoSaveInterval = 3000,
  showSubmitButton = true,
  submitText = '提交',
  validationAnimation = true,
  onAutoSave,
  children,
  onFinish,
  ...rest 
}) => {
  const [form] = AntdForm.useForm(rest.form);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const cls = classNames(
    'yududesign-form',
    className,
    {
      'yududesign-form-animated': validationAnimation,
    }
  );

  // 自动保存功能
  React.useEffect(() => {
    if (!autoSave || !onAutoSave) return;

    const timer = setInterval(() => {
      const values = form.getFieldsValue();
      if (Object.keys(values).length > 0) {
        onAutoSave(values);
        message.success('已自动保存', 1);
      }
    }, autoSaveInterval);

    return () => clearInterval(timer);
  }, [autoSave, autoSaveInterval, onAutoSave, form]);

  const handleFinish = async (values: any) => {
    if (onFinish) {
      setIsSubmitting(true);
      try {
        await onFinish(values);
        message.success('提交成功');
      } catch (error) {
        message.error('提交失败');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className={cls}>
      <AntdForm 
        form={form}
        onFinish={handleFinish}
        {...rest}
      >
        {children}
        {showSubmitButton && (
          <AntdForm.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              loading={isSubmitting}
              className="yududesign-form-submit"
            >
              {submitText}
            </Button>
          </AntdForm.Item>
        )}
      </AntdForm>
      {autoSave && (
        <div className="yududesign-form-autosave-tip">
          自动保存已启用
        </div>
      )}
    </div>
  );
};

Form.Item = AntdForm.Item;
Form.List = AntdForm.List;
Form.ErrorList = AntdForm.ErrorList;
Form.Provider = AntdForm.Provider;
Form.useForm = AntdForm.useForm;
Form.useFormInstance = AntdForm.useFormInstance;
Form.useWatch = AntdForm.useWatch;

export { Form };
export default Form;
