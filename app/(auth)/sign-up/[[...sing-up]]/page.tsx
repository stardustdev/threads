import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="w-full h-[100vh] flex">
      <div className="m-auto">
        <SignUp />
      </div>
    </div>
  );
}
