'use client';

import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useActionState } from 'react'; // Assuming React 19+ with useActionState
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { contactFormSubmission } from '@/actions/contactFormSubmission';

// Define the form data type
type FormData = {
  name: string;
  mobileNumber: string;
  email: string;
  highestGraduation: string;
  startDate: string;
  endDate: string;
  referralCode?: string;
};

// Define the validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  mobileNumber: yup
    .string()
    .matches(/^\d{10}$/, 'Mobile number must be 10 digits')
    .required('Mobile number is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  highestGraduation: yup.string().required('Highest graduation is required'),
  startDate: yup.date().required('Start date is required'),
  endDate: yup
    .date()
    .required('End date is required')
    .min(yup.ref('startDate'), 'End date must be after start date'),
  referralCode: yup.string().optional(),
});

// Define the initial state for useActionState
type ActionState = {
  success: boolean;
  error: string | null;
};

const initialState: ActionState = {
  success: false,
  error: null,
};

const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    getValues,
    getFieldState,
    reset,
  } :any= useForm<FormData |any>({
    resolver: yupResolver(schema),
    mode: 'all', // Validate on every change
  });

  // Define the form action function
  const submitFormAction = async (prevState: ActionState, formData: FormData) => {
    try {
      const response:any = await contactFormSubmission({
        name: formData.name,
        mobileNumber: formData.mobileNumber,
        emailId: formData.email,
        highestGraduation: formData.highestGraduation,
        startDateTimeStamp: formData.startDate,
        endDateTimeStamp: formData.endDate,
        referralCode: formData.referralCode || '',
      });

      if (response.success) {
        toast.success(response.message || 'Form submitted successfully!');
        reset()
        return { success: true, error: null };
      } else {
        toast.error(response.message || 'Submission failed');
        return { success: false, error: response.message || 'Submission failed' };
      }
    } catch (error: any) {
      toast.error('Something went wrong. Please try again!');
      return { success: false, error: error.message || 'Submission failed' };
    }
  };

  // Use useActionState to manage form submission state
  const [state, formAction, isPending] = useActionState(submitFormAction, initialState);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    formAction(data); // Trigger the form action
  };

  // Check if all fields are valid and filled
  const isFormValid = isValid && isDirty;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
      {/* Name Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="Enter your full name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          )}
        />
        {errors?.name || (getFieldState('name').isTouched && !getValues('name')) ? (
          <p className="text-red-500 text-xs mt-1 font-poppins">
            {errors.name?.message || 'Name is required'}
          </p>
        ) : null}
      </div>

      {/* Mobile Number Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
        <Controller
          name="mobileNumber"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="Enter your 10-digit mobile number"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          )}
        />
        {errors?.mobileNumber || (getFieldState('mobileNumber').isTouched && !getValues('mobileNumber')) ? (
          <p className="text-red-500 text-xs mt-1 font-poppins">
            {errors.mobileNumber?.message || 'Mobile number is required'}
          </p>
        ) : null}
      </div>

      {/* Email Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Email ID</label>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="email"
              placeholder="Enter your email address"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          )}
        />
        {errors?.email || (getFieldState('email').isTouched && !getValues('email')) ? (
          <p className="text-red-500 text-xs mt-1 font-poppins">
            {errors.email?.message || 'Email is required'}
          </p>
        ) : null}
      </div>

      {/* Highest Graduation Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Highest Graduation</label>
        <Controller
          name="highestGraduation"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="Enter your highest graduation"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          )}
        />
        {errors?.highestGraduation || (getFieldState('highestGraduation').isTouched && !getValues('highestGraduation')) ? (
          <p className="text-red-500 text-xs mt-1 font-poppins">
            {errors.highestGraduation?.message || 'Highest graduation is required'}
          </p>
        ) : null}
      </div>

      {/* Start Date and End Date Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Start Date</label>
          <Controller
            name="startDate"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="date"
                placeholder="dd-mm-yyyy"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            )}
          />
          {errors?.startDate || (getFieldState('startDate').isTouched && !getValues('startDate')) ? (
            <p className="text-red-500 text-xs mt-1 font-poppins">
              {errors.startDate?.message || 'Start date is required'}
            </p>
          ) : null}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">End Date</label>
          <Controller
            name="endDate"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="date"
                placeholder="dd-mm-yyyy"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            )}
          />
          {errors?.endDate || (getFieldState('endDate').isTouched && !getValues('endDate')) ? (
            <p className="text-red-500 text-xs mt-1 font-poppins">
              {errors.endDate?.message || 'End date is required'}
            </p>
          ) : null}
        </div>
      </div>

      {/* Referral Code Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Referral Code</label>
        <Controller
          name="referralCode"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="Enter your referral code"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          )}
        />
        {errors?.referralCode && (
          <p className="text-red-500 text-xs mt-1 font-poppins">{errors.referralCode.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!isFormValid || isPending}
        className={`w-full bg-blue-600 text-white py-2 px-4 rounded-lg focus:ring-2 focus:ring-blue-500 ${
          !isFormValid || isPending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
        }`}
      >
        {isPending ? 'Submitting...' : 'Submit'}
      </button>

      {/* Success and Error Messages */}
      {state.success && (
        <p className="text-green-500 text-sm mt-2">Form submitted successfully!</p>
      )}
      {state.error && (
        <p className="text-red-500 text-sm mt-2">{state.error}</p>
      )}
    </form>
  );
};

export default ContactForm;