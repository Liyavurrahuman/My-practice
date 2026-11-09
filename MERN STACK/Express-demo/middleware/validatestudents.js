const validateStudents = (req, res, next) => 
{
    const { name, age ,course} = req.body;

    if (!name || !age || !course)
    {
        return res.status(400).json(
            {
                message: "Name, age and course are required fields"

            }
        );
    }
    if (typeof name !== "string" || name.trim() === "")
    {
        return res.status(400).json(
            {
                message: "Name must be a non-empty string"
            }
        );
    }
    if (typeof age !== "number" || age <= 0)
    {
        return res.status(400).json(
            {
                message: "Age must be a positive number"
            }
        );
    }
    if (typeof course !== "string" || course.trim() === "")
    {
        return res.status(400).json(
            {
                message: "Course must be a non-empty string"
            }
        );
    }
    next();
}