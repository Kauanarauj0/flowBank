import prisma from "../prisma/prismaClient.js";

export async function createUser(req, res) {
  try {
    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        cpf: req.body.cpf,
        password: req.body.password,
      },
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      message: "Erro ao criar usuário",
    });
  }
}

export async function getUsers(req, res) {
  const users = await prisma.user.findMany();

  res.status(200).json(users);
}

export async function updateUser(req, res) {
  const user = await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  });

  res.status(200).json(user);
}

export async function deleteUser(req, res) {
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({
    message: "Usuário deletado",
  });
}
