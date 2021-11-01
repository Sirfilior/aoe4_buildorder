import Backlink from "./backlinkl";

export default function Civlayout({ children, title }) {
  return (
    <>
      <main className="h-full container mx-auto flex flex-col py-12">
        <div>
          <div>
            <h1 className="page-title">{title}</h1>
          </div>
        </div>
        {children}
      </main>
    </>
  );
}
