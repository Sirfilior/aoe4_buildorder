import Link from "next/link";

export default function Buildlist({ builds }) {
  return (
    <div>
      {builds.map((b) => (
        <Link key={b.name} href={`/builds/${encodeURIComponent(b.filename)}`}>
          <a className="bg-bluedark border-yellow border-2 px-4 py-2 mb-4 flex justify-between cursor-pointer hover:bg-bluelight">
            <h3>{b.name}</h3>
            <div className="flex text-yellow">
              <span>{b.type}</span>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
