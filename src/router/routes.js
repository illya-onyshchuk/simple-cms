import { tables } from "../testdb/tables";
import { lazy } from "react";


const DummyTable = lazy(() => import("../components/DummyTable"))
const DummyList = lazy(() => delayForDemo(import("../components/DummyList") ))
const DummyChart = lazy(() => import("../components/DummyChart"))

export const publickRoutes = tables.map(table => 
    table.id === 'dummyTable'
     ? {...table, component: <DummyTable/>, expect: true}
     : table.id === 'dummyList'
     ? {...table, component: <DummyList/>, expect: true}
     : {...table, component: <DummyChart/>, expect: true}
)


async function delayForDemo(promise) {
  await new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
  return promise;
}
