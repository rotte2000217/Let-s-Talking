import React from 'react'
import { FaUsers } from 'react-icons/fa'
import { AiFillMessage } from 'react-icons/ai'
import { IoCallSharp,IoExit,IoNotifications } from 'react-icons/io5'
import { IoMdSettings } from 'react-icons/io'
import { Button, VStack } from '@chakra-ui/react'
import { useSearchContacts } from '@main/context/search-contacts-context'
import Exit from '@aplication/usecase/exit/exit'
import { useAuth } from '@main/context/auth-context'
import { useSideMenu } from '@main/context/side-menu-context'

interface ISideMenu {
    exit:Exit
}

const SideMenu: React.FC<ISideMenu>= ({exit}) => {
	const {toogle} = useSearchContacts()
	const {openContentContacts,isOpenContentContacts,isopenNotifications,openNotifications} = useSideMenu()
	const {authenticate} = useAuth()

	return (
		<VStack w={'100%'} alignItems={'center'} flexDir='column' justifyContent={'flex-start'}>
			<Button variant={'icon'} borderRadius={'full'} w={'40px'} h={'40px'} p={0} onClick={()=>openContentContacts(!isOpenContentContacts)}>
				<AiFillMessage size={25} />
			</Button>
			<Button variant={'icon'} borderRadius={'full'} w={'40px'} h={'40px'} p={0} onClick={()=>openNotifications(!isopenNotifications)}>
				<IoNotifications size={25} />
			</Button>
			<Button variant={'icon'} borderRadius={'full'} w={'40px'} h={'40px'} p={0} onClick={()=>toogle(true)}>
				<FaUsers size={25} />
			</Button>
			<Button variant={'icon'} borderRadius={'full'} w={'40px'} h={'40px'} p={0}>
				<IoCallSharp size={25} />
			</Button>
			<Button variant={'icon'} borderRadius={'full'} w={'40px'} h={'40px'} p={0}>
				<IoMdSettings size={30} />
			</Button>
			<Button className='btn-exit' variant={'icon'} borderRadius={'full'} w={'40px'} h={'40px'} p={0} onClick={()=>exit.handle(authenticate)}>
				<IoExit size={30} />
			</Button>
		</VStack>
	)
}

export default SideMenu