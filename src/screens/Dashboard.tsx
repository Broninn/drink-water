import React, { useEffect, useState } from 'react';
import { Text, HStack, Button, useToast, VStack, Box  } from 'native-base';

interface IDashboardProps {

}

export const Dashboard: React.FC<IDashboardProps> = () => {
    const [cupSize, setCupSize] = useState<number>(300)
    const [water, setWater] = useState<number>(0);
    const [goal, setGoal] = useState<number>(2000);

    const toast = useToast();

    const handleWater = () => {
        setWater(water + cupSize);
        toast.show({
            description: `Você bebeu ${cupSize} de água`
        })
    };

    const handleChangeCupSize = (size: number) => {
        setCupSize(size);
    }

    useEffect(() => {
        if (water >= goal) {
            toast.show({
                description: "Você atingiu sua meta de água",
                placement: "top",
                colorScheme: "success",
            })
        }
    }, [water]);
    

    return (
        <VStack flex={1} width='100%' justifyContent='space-between' alignItems="center" p={4} my={20}>
            <Text fontSize="sm">
                {' '} copo de {cupSize}ml
            </Text>
            <VStack>
                <HStack alignItems="center" justifyContent="center">
                    <Text fontSize="6xl">
                        { water } /
                    </Text>
                    <Text  fontSize="xl">
                        {' '}{goal} ml
                    </Text>
                </HStack>
                <Button
                    mt={5}
                    colorScheme="primary"
                    onPress={handleWater}
                >
                    Beber água
                </Button>
            </VStack>
            
            <Box mt={5}>
                <Button.Group>
                    <Button onPress={() => handleChangeCupSize(200)} colorScheme="teal">Copo Americano</Button>
                    <Button onPress={() => handleChangeCupSize(350)} colorScheme="teal">Xícara</Button>
                    <Button onPress={() => handleChangeCupSize(1000)} colorScheme="teal">Garrafa 1L</Button>
                </Button.Group>
            </Box>
            
        </VStack>
    );
};
