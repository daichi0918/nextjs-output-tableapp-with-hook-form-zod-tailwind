import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';

import type { NoNullUndefined } from 'types/NoNullUndefined';
import { classNameMerge } from 'utils/classNameMerge';

const buttonVariants = cva(
  'disabled:bg-bg-gray disabled:text-text-gray cursor-pointer rounded font-bold',
  {
    variants: {
      /**
       * ボタンのカラー
       */
      variant: {
        default: 'bg-link-base text-white',
        outline: 'bg-white text-link-base border border-link-base',
        gray: 'text-text-gray font-normal text-sm',
        text: 'text-link-base font-normal',
        none: 'font-normal',
      },
      /**
       * ボタンのサイズ
       */
      size: {
        default: 'py-[7.5px] px-3.5',
        sm: 'py-0.5 px-2 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
type ButtonProps = ComponentProps<'button'> &
  NoNullUndefined<VariantProps<typeof buttonVariants>> & {
    type: ComponentProps<'button'>['type'];
  };

// eslint-disable-next-line prefer-arrow-callback
const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'default', size = 'default', className, children, ...restProps },
  ref
) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={classNameMerge(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...restProps}
    >
      {children}
    </button>
  );
});

export default Button;
