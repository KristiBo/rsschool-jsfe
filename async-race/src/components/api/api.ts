const serverURL = 'http://127.0.0.1:3000';

async function getCars() {
  const serverResp = await fetch(`${serverURL}/garage`);
  const carsArray = await serverResp.json();
  return carsArray;
}

async function getCarsPerPage(pageNr: number) {
  const serverResp = await fetch(`${serverURL}/garage?_page=${pageNr}&_limit=2`);
  const carsArray = await serverResp.json();
  return carsArray;
}

async function getAllCarsCount() {
  const serverResp = await fetch(`${serverURL}/garage?_page=1&_limit=7`);
  const carsCount = serverResp.headers.get('X-Total-Count');
  return carsCount;
}

async function getCar(id: number) {
  const serverResp = await fetch(`${serverURL}/garage/${id}`);
  const car = await serverResp.json();
  return car;
}

async function createCar(carName: string, carColor: string) {
  const data = { name: carName, color: carColor };
  await fetch(`${serverURL}/garage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}

async function deleteCar(id: number) {
  await fetch(`${serverURL}/garage/${id}`, {
    method: 'DELETE',
  });
}

async function updateCar(carName: string, carColor: string, id: number) {
  const data = { name: carName, color: carColor };
  await fetch(`${serverURL}/garage/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}

async function startStopCarsEngine(id: number, status: string) {
  const serverResp = await fetch(`${serverURL}/engine?id=${id}&status=${status}`, {
    method: 'PATCH',
  });
  const params = await serverResp.json();
  return params;
}

async function switchEngineDrive(id: number) {
  const serverResp = await fetch(`${serverURL}/engine?id=${id}&status=drive`, {
    method: 'PATCH',
  });
  const { status } = serverResp;
  return status;
}

async function getWinners(page: number, sort: string, order: string) {
  const serverResp = await fetch(`${serverURL}/winners?_page=${page}&_limit=10&_sort=${sort}&_order=${order}`);
  const winners = await serverResp.json();
  return winners;
}

async function getWinner(id: number) {
  const serverResp = await fetch(`${serverURL}/winners/${id}`);
  const winner = await serverResp.json();
  return winner;
}

async function createWinner(idWin: number, winsCount: number, timeWin: number) {
  const data = { id: idWin, wins: winsCount, time: timeWin };
  await fetch(`${serverURL}/winners`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}

async function deleteWinner(id: number) {
  await fetch(`${serverURL}/winners/${id}`, {
    method: 'DELETE',
  });
}

async function updateWinner(id: number, winsCount: number, timeWin: number) {
  const data = { wins: winsCount, time: timeWin };
  await fetch(`${serverURL}/winners/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}

export {
  getCars,
  getCarsPerPage,
  getAllCarsCount,
  getCar,
  createCar,
  deleteCar,
  updateCar,
  startStopCarsEngine,
  switchEngineDrive,
  getWinners,
  getWinner,
  createWinner,
  deleteWinner,
  updateWinner,
};
