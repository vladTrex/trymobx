import React from 'react';
import { View, Text } from 'react-native';

const ProjectList = ({ projects }) => {
    return (
        <View>
            {projects.map((project, idx) => <Text key={idx}>{project.project}</Text>)}
        </View>
    );
}

export default ProjectList;