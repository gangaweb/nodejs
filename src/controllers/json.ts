export function JsonRes(data: any, err: Boolean = true) {
  if (err) {
    return { "data": data, status: "ok" };
  }

  return { "data": data, status: "not_ok" };

}



