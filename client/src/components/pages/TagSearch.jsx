import React from 'react'


const TagSearch =() => {

    const searchList = (e) => {
        db.User.find({
            $or:
            [
                {mentorTag: [e.target.value]},
                {menteeTag: [e.target.value]} 
            ]
        })
        .then(foundUsers => {
            res.send({foundUsers})
        })
    }

    return(
        <div>
            <form>
                <label for="tag-search">Tag Search:</label>
                <input type="text" name="tag-search" onChange={searchList} />
            </form>
            <hr />
            <p>{foundUsers}</p>
        </div>
    )
}

export default TagSearch