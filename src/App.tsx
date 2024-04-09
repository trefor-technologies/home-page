import { Logo } from "./Logo";

export const App = () => (
  <>
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <Logo />
        <p className="mt-6 text-base leading-7 text-gray-600">
          Engineering, Passion, and Excellence.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://github.com/trefor-technologies"
            className="text-sm font-semibold text-gray-900 bg-gray-100 p-2 rounded-md"
          >
            Github
          </a>
        </div>
      </div>
    </main>
  </>
);
