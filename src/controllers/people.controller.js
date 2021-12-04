import People from "../models/people.model";

export const getPeople = async (req, res) => {
  await People.findAll()
    .then((people) => {
      res.json(people);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};

export const getPerson = async (req, res) => {
  await People.findByPk(req.params.id)
    .then((person) => {
      res.json(person);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};

export const createPerson = async (req, res) => {
  await People.create(req.body)
    .then((person) => {
      res.json(person);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};

export const updatePerson = async (req, res) => {
  await People.update(
    {
      name: req.body.name,
      lastname: req.body.lastname,
      birthday: req.body.birthday,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((person) => {
      res.json(person);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};

export const deletePerson = async (req, res) => {
  await People.destroy({
    where: {
      id: req.params.id,
    },
  });
};

export const ageAverage = async (req, res) => {
  await People.findAll()
    .then((people) => {
      people.map((person) => {
        const age = new Date().getFullYear() - new Date(person.birthday).getFullYear();
        person.age = age;
      });
      const ageAverage = people.reduce((acc, person) => {
        return acc + person.age;
      }, 0) / people.length;
      res.json({ageAverage});
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};
