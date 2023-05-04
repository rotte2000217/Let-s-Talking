import React, { useState } from 'react'
import { Flex, HStack, Heading, Circle, Text, VStack, Input, InputGroup, InputRightElement, Divider, Button } from '@chakra-ui/react'
import { SearchIcon, ArrowForwardIcon, } from '@chakra-ui/icons'
import ContentMessages from './components/content-messages'
import HeaderCurrentChat from './components/header-current-chat'
import MakeSideMenu from '@main/factories/sideMenu-factory'
import MakeContentContacts from '@main/factories/content-contacts-factory'
import { useSideMenu } from '@main/context/side-menu-context'
import MakeSearchContacts from '@main/factories/search-contacts-factory'
import MakeNotifications from '@main/factories/notification-factory'


const Chat: React.FC = () => {
	const [showUserDetails, setShowUserDetails] = useState<boolean>(false)
	const {isOpenContentContacts} = useSideMenu()
	function showContact() {
		setShowUserDetails(!showUserDetails)
	}
	return (
		<Flex w='100%' h='100%' alignItems={'center'} justifyContent={'flex-start'} >
			<MakeSearchContacts/>
			<MakeNotifications/>
			<HStack h={'100%'} w={'60px'} bg='#F6F8FC'>
				<MakeSideMenu />
			</HStack>
			<Divider orientation='vertical' />
			<HStack h={'100%'} w={'350px'} bg='#FAFCFF' flexDir={'column'} p='5' hidden={!isOpenContentContacts}>
				<VStack alignItems='flex-start' w='100%'>
					<HStack pb='3'>
						<Heading fontSize='3xl' variant='h1'>Mensagens</Heading >
						<Text variant='sub'>(30)</Text>
					</HStack>
					<InputGroup pb='3'>
						<InputRightElement
							pointerEvents='none'
							children={<SearchIcon color='gray.300' />}
						/>
						<Input variant='default' type='tel' placeholder='Phone number' />
					</InputGroup>
				</VStack>
				<MakeContentContacts />
			</HStack>
			<Divider orientation='vertical' />
			<HStack bg='#FAFCFF' h={'100%'} flex='1' width={'auto'} flexDir={'column'} >
				<HeaderCurrentChat showUser={showContact} />
				<Divider orientation='horizontal' m={'0 !important'} />
				<ContentMessages />
				<HStack h='80px' w='50%'>
					<InputGroup pb='3'>
						<InputRightElement
							pointerEvents='none'
							children={
								<Button bg='#191A1E' color='white'>
									<ArrowForwardIcon />
								</Button>}
						/>
						<Input variant='default' type='tel' placeholder='Mensagem...' />
					</InputGroup>
				</HStack>
			</HStack>
			<Divider orientation='vertical' />
			{showUserDetails && (
				<HStack bg='#FAFCFF' h={'100%'} minW={300} alignItems='flex-start' justifyContent='center'>
					<VStack p='10'>
						<Circle size='100px' bg='#191A1E' color='white'>
						</Circle>
						<Heading fontSize='5xs' fontWeight={'medium'}>Fake name</Heading >
						<Text>Tal tal</Text>
					</VStack>
				</HStack>
			)}
		</Flex>
	)
}

export default Chat
