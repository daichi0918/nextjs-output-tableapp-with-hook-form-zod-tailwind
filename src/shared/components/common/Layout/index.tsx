import { memo, PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="w-full min-h-full overflow-x-auto">
      <div className="min-h-full relative">{children}</div>
    </main>
  );
};

export default memo(Layout);
