import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="w-full h-[100vh] flex">
      <div className="m-auto">
        <SignIn />
      </div>
    </div>
  );
}
