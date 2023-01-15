import React, { useContext, useState } from 'react'
import {Avatar, Box, Text, Slider, Divider} from 'native-base'
import { SafeAreaView  } from 'react-native'
import { UserContext } from '../contexts/UserContext';

interface ProfileScreenProps {
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
}) => {

  const { goal, setGoal, user } = useContext(UserContext);


  return (
    <SafeAreaView>
      <Box mt={30}>
        <Avatar bg="green.500" alignSelf="center" size="2xl" source={{
          uri: user?.photo ||undefined,
        }}>
            {user?.name.substring(0,1)}
        </Avatar>
        <Text fontSize={"2xl"} textAlign="center" mt={4}>
          {user?.name}
        </Text>

        <Divider my={20} />

        <Box mx={20}>
          <Text fontSize={"xl"} textAlign="center" mt={4}>
            Meta de água
          </Text>
          <Text fontSize={"xl"} textAlign="center" mt={4}>
            {goal}ml
          </Text>
          <Slider 
            defaultValue={goal} 
            value={goal}
            minValue={0} 
            maxValue={5000} 
            step={50}
            onChange={(value: number) => setGoal(value)}
            >
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
        </Box>
      </Box>
    </SafeAreaView>
  );
};
