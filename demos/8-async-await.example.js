async function getAllData() {
  try {
    let resA = await getDataA('here we go')
    let resB = await getDataB(resA)
    let resC = await getDataC(resB)
    let resD = await getDataD(resC)
    let resE = await getDataE(resD)
    console.log(resE)
  } catch (err) {
    console.err(err)
  }
}
