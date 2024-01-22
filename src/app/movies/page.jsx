import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;

async function getData() {
  const config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNzA1OTQ0MzM2LCJleHAiOjE3MDg1MzYzMzYsImp0aSI6IjgwYTdiMjcxLTBiMTktNGUwYS1iNzVkLTFmYjZiMGI0ZmQwNiJ9.0XqWCiGMjGnPHHWZ4G2S3TGcJzDBCHDCzMPwJKngbtY",
    },
  };
  const response = await fetch(
    "http://127.0.0.1:4000/api/users/clients?page=2",
    config
  );
  const data = await response.json();
  return data;
}

export default async function MoviesPage() {
  const { data } = await getData();
  return (
    <div className="flex flex-col gap-4 mt-2">
      {data.map((item, index) => (
        <div key={index} className="border shadow p-4 rounded ">
          <p>{item.id}</p>
          <p>{item.name}</p>
          <Link
            href={`/movies/${item.id}`}
            className="text-blue-300 hover:underline"
          >
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
