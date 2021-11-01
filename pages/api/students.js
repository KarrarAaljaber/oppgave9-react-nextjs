


export const students = [

]

export default function handler(req, res) {
    if (req.method === 'POST') {
          // tar i mot data som sendes med forespørselen
      const data = req.body.student
      const newStudent = {
        id: Date.now(),
        fullname: data
      }
          
          // legger til data i quiz listen vår
      students.push(newStudent)
          
          // sender status 201 (Created) og den nye oppdaterte listen
      res.status(201).json({ success: true, data: students })
    } else {
      res.status(200).json({ success: true, data: students })
    }
  }