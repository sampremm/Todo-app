import express from 'express'
import prisma from '../prismaclient.js'

const router = express.Router()

// Get all todos for logged-in user
router.get('/', async (req, res) => {
    const getTodos = await prisma.todo.findMany({
        data: {
            user_id: req.userId

        }
    })

    res.json(getTodos, { message: "Todos found" })
})

// Create a new todo
router.post('/', async  (req, res) => {
    const { task } = req.body
    const insertTodo = await prisma.todo.create({
        data: {
            user_id: req.userId,
            task
        }
    })

    res.json(insertTodo , { message: "Todo created" })
})

// Update a todo
router.put('/:id',async (req, res) => {
    const { completed } = req.body
    const { id } = req.params

    const updateTodo= await prisma.todo.update({
        where: {
            id:parseInt(id),
            userId: req.userId
        },
        data: {
            completed:!!completed
        }
    })

    res.json( updateTodo, { message: "Todo completed" })
})

// Delete a todo
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const userId = req.userId
    const deleteTodo =await prisma.todo.delete({
        where: {
            id: parseInt(id),
            user_id: userId
        }
    })
    res.send(deleteTodo,{ message: "Todo deleted" })
})

export default router