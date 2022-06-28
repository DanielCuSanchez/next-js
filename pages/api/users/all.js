
export default function getAll(req, res) {
  return res.status(200).json([
    {
      name: "Andrew"
    },
    {
      name: "Tom"
    }
  ])
}