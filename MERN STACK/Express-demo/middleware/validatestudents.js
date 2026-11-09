const validateStudents = (req, res, next) => 
{
    const { name, age ,course} = req.body;

    if (!name || !age || !course)
    {
        return res.status(400).json(
            {
                message: "Name, age and course are required fields"

            }
        )
    }
}