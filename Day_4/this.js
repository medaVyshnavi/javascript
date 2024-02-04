const obj = {
  name: "vyshnavi",
  x: function () {
    console.log(this);
  },
};

obj.x(); // obj object

const obj2 = {
  name: "vyshnavi",
  x: () => {
    console.log(this);
  },
};

obj2.x(); // window object

const obj3 = {
  name: "meda",
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};

obj3.x(); // obj3

const obj4 = {
  name: "venkatesh",
  x: () => {
    const y = () => {
      console.log(this);
    };
    y();
  },
};

obj4.x(); // window object

const obj5 = {
  name: "dhriti",
  x: () => {
    function y() {
      const a = {
        name: "meda",
        z: function () {
          console.log(this);
        },
      };
      a.z();
    }
    y();
  },
};

obj5.x();
