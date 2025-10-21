export function getAllNtoes(req, res){
    res.status(201).json({message: "Note fetched successfully"})

}
export function createNote(req, res){
    res.status(201).json({message: "Note created successfully"})

}
export function updateNotes(req, res){
    res.status(200).json({message: "Note uploaded successfully"})
}
export function deleteNotes(req, res){
    res.status(200).json({message: "Note deleted successfully"})
}