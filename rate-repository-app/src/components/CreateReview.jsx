import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import theme from '../theme';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import { useHistory } from "react-router-native";
import useReview from '../hooks/useReview';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: theme.colors.repositoryItem
      },
    buttonContainer: {
        padding: 15
    },
    button: {
        backgroundColor: theme.colors.primary
    }
});

let yupSchema = yup.object().shape({
    owner: yup.string().required("Repository owner name is required"),
    name: yup.string().required("Repository name is required"),
    rating: yup.number().required("Rating is required").min(0, "Rating must be equal or higher than 0").max(100, "Rating must be equal or lower than 100").integer(),
    review: yup.string().optional(),
  });

const CreateReview = () => {
    console.log("Create review");

    let history = useHistory();
    const [review] = useReview();

    const onSubmit = async (values) => {
        const { owner, name, rating, text } = values;
        console.log("onsub",{ owner, name, rating, text });
        try {
          let result = await review({ owner, name, rating, text });
          console.log("id", result);
          history.push(`/repositories/${result.data.createReview.repositoryId}`);
        } catch (e) {
          console.log(e);
        }
      };

    return (
        <Formik
     initialValues={{
         owner: "",
         name:"",
         rating: "",
         review:""
        }}
     onSubmit={onSubmit}
     validationSchema={yupSchema}
   >
     {({ handleSubmit }) => (
       <View style={styles.container}>
         <FormikTextInput name="owner" placeholder="Repository owner name"/>
         <FormikTextInput name="name" placeholder="Repository name"/>
         <FormikTextInput name="rating" placeholder="Rating between 0 and 100"/>
         <FormikTextInput name="text" placeholder="Review" multiline="true"/>
         <View style={styles.buttonContainer}>
            <Button style={styles.button} onPress={handleSubmit} title="Create a review" />
         </View>
       </View>
     )}
   </Formik>
    );
};
  
  export default CreateReview;