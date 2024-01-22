import ClientDialog from "@/components/client/client-dialog";
import { Suspense } from "react";

export const revalidate = 0;

async function getData(id) {
  const config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNzA1OTQ0MzM2LCJleHAiOjE3MDg1MzYzMzYsImp0aSI6IjgwYTdiMjcxLTBiMTktNGUwYS1iNzVkLTFmYjZiMGI0ZmQwNiJ9.0XqWCiGMjGnPHHWZ4G2S3TGcJzDBCHDCzMPwJKngbtY",
    },
  };
  const response = await fetch(
    `http://127.0.0.1:4000/api/users/clients/${id}`,
    config
  );
  const data = await response.json();
  return data;
}

export default async function Page({ params }) {
  const { id } = params;
  const data = await getData(id);

  return (
    <Suspense fallback={"..."}>
      <ClientDialog client={data} />;
    </Suspense>
  );
}
