import React, { useEffect, useState } from 'react';
import { Text, HStack, Button, useToast  } from 'native-base';

interface IDashboardProps {

}

export const Dashboard: React.FC<IDashboardProps> = () => {
    const [water, setWater] = useState<number>(0);
    const [goal, setGoal] = useState<number>(2000);
    const toast = useToast();

    const handleWater = () => {
        setWater(water + 250);
        toast.show({
            description: "Você bebeu 250ml de água"
        })
    };

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
        <>
            <HStack alignItems="center" justifyContent="center">
                <Text fontSize="6xl">
                    { water } / 
                </Text>
                <Text  fontSize="xl">
                    {' '}{goal} ml 
                </Text>
            </HStack>

                <Button
                    colorScheme="primary"
                    onPress={handleWater}
                >
                    Beber água
                </Button>
                

            
        </>
    );
};
