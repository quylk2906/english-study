import { FC, useRef } from 'react';

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  text?: string;
};

export const CopyText: FC<Props> = ({ text, onClick, ...props }) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  const handleClick = (ev: any) => {
    onClick?.(ev);
    const copyContent =
      text ?? spanRef.current?.textContent ?? spanRef.current?.innerText ?? '';
    navigator.clipboard.writeText(copyContent);
  };

  return (
    <span ref={spanRef} {...props} onClick={handleClick}>
      {props.children}
    </span>
  );
};
