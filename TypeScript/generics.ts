function returnVal(val: number | string): number | string {
  return val;
}

function returnValTwo(val: any): any {
  return val;
}

// این ینی با هرتایپی ک فرستادم به تابع با همون تایپ برگشت داده بشه
function returnValThree<typeeeee>(val: typeeeee): typeeeee {
  return val;
}

interface DocumentCoord {
  docX: string;
  docY: string;
  fixed: boolean;
}

returnValThree<DocumentCoord>({ docX: "12", docY: "13", fixed: false });

function getSearch<T>(prods: T[]): T[] {
  console.log(prods.length);
  return prods;
}
