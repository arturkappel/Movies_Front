import { Routes, Route} from 'react-router-dom'


import { Preview } from '../pages/Preview'
import { Profile } from '../pages/Profile'
import { CreateMovie } from '../pages/CreateMovie'
import { Home } from '../pages/Home'

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element= { <Home />} />
            <Route path='/new' element= { <CreateMovie />} />
            <Route path='/profile' element= { <Profile />} />
            <Route path='/details/' element= { <Preview />} />

        </Routes>
    )
}