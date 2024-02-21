document.querySelector(".btn").addEventListener("click", function (event) {
  event.preventDefault();

  const nameit = document.querySelector(".in1");
  const sal = document.querySelector(".salin");
  const ed = document.querySelector(".eid");
  const des = document.querySelector(".desig");
  const department = document.querySelector(".depat");
  const dob = document.querySelector(".date");

  console.log(nameit.value);
  console.log(sal.value);
  console.log(ed.value);
  console.log(des.value);
  console.log(department.value);
  console.log(dob.value);

  const requestData = {
    name: nameit.value,
    empid: ed.value,
    gender: "Male",
    depart: department.value,
    desig: des.value,
    sal: sal.value,
    dob: dob.value,
  };

  async function postData(
    url = "http://localhost:3000/api/v1/tasks",
    data = requestData
  ) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response.json();
  }
  const Success = postData().then((res) => {
    console.log(res.msg);
    if (res.msg == "Success") {
      console.log("Success on time");
    } else {
      alert(res.msg);
    }
  });
});
