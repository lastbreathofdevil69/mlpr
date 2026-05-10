# ML Practical Viva

---

## Experiment 1: Exploratory Data Analysis (EDA) and Visualization

**1. What is EDA?**
EDA stands for Exploratory Data Analysis. It is used to understand the dataset using graphs, statistics, and visualizations before applying machine learning algorithms.

**2. Why is EDA important?**
EDA helps to:
- Understand data
- Find missing values
- Detect outliers
- Understand relationships between variables

**3. What is data visualization?**
Data visualization means representing data in graphical form like charts and graphs.

**4. Which Python libraries are used for EDA?**
Common libraries are:
- Pandas
- NumPy
- Matplotlib
- Seaborn

**5. What is Pandas?**
Pandas is a Python library used for data manipulation and analysis.

**6. What is a DataFrame?**
A DataFrame is a table-like structure in Pandas with rows and columns.

**7. What is the use of Matplotlib?**
Matplotlib is used for creating graphs and plots.

**8. What is Seaborn?**
Seaborn is a visualization library based on Matplotlib used for attractive statistical graphs.

**9. What is a histogram?**
A histogram shows the distribution of numerical data.

**10. What is a scatter plot?**
A scatter plot shows the relationship between two variables.

---

## Experiment 2: Data Preprocessing and Feature Engineering

**11. What is data preprocessing?**
Data preprocessing is the process of cleaning and preparing data before training the model.

**12. Why is preprocessing needed?**
Because raw data may contain:
- Missing values
- Noise
- Duplicate values
- Inconsistent data

**13. What are missing values?**
Missing values are empty or null values in the dataset.

**14. How can we handle missing values?**
We can:
- Remove rows/columns
- Replace with mean, median, or mode

**15. What is feature engineering?**
Feature engineering means creating or selecting important features from raw data.

**16. What is normalization?**
Normalization scales data between 0 and 1.

**17. What is standardization?**
Standardization converts data into a standard format with mean 0 and standard deviation 1.

**18. What is encoding?**
Encoding converts categorical data into numerical form.

**19. Difference between normalization and standardization?**
- Normalization → values between 0 and 1
- Standardization → mean becomes 0

**20. What is an outlier?**
An outlier is a data point that is very different from other values.

**25. What is One Hot Encoding?**
Converting categorical values into binary columns.

**26. What is Label Encoding?**
Converting categories into numeric labels.

**27. Difference between Label Encoding and One Hot Encoding?**
- Label Encoding gives numbers
- One Hot Encoding creates separate columns

---

## Experiment 3: Linear Regression

**21. What is Linear Regression?**
Linear Regression is a supervised learning algorithm used to predict continuous values.

**22. What is Simple Linear Regression?**
It uses one independent variable to predict one dependent variable.

**23. What is Multiple Linear Regression?**
It uses multiple independent variables to predict one output.

**24. Give the equation of Linear Regression.**

$$y = mx + c$$

Where:
- y = predicted value
- m = slope
- x = input variable
- c = intercept

**25. What is dependent variable?**
The output variable that we want to predict.

**26. What is independent variable?**
The input variable used for prediction.

**27. What is supervised learning?**
A type of learning where input and output data are already labeled.

**28. What is model accuracy?**
Accuracy tells how correctly the model predicts results.

**29. What is overfitting?**
Overfitting happens when the model learns training data too well and performs poorly on new data.

**30. What is underfitting?**
Underfitting happens when the model cannot learn the pattern properly.

**33. What is Mean Squared Error (MSE)?**
Measures prediction error.

$$MSE = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$$

**34. What is R² score?**
It measures how well the model fits the data.

**35. Ideal value of R² score?**
Closer to 1.

---

## Experiment 4: Classification Concepts

**31. What is classification?**
Classification is a supervised learning technique used to predict categories or classes.

**32. Give examples of classification problems.**
- Spam detection
- Disease prediction
- Iris flower classification

**33. Difference between classification and regression?**
- Classification predicts categories
- Regression predicts numerical values

**34. What is training data?**
Data used to train the model.

**35. What is testing data?**
Data used to test the model performance.

**36. Why do we split data into train and test?**
To evaluate model performance on unseen data.

**38. What is confusion matrix?**
A table showing correct and incorrect predictions.

**75. What is accuracy formula?**
Accuracy is the percentage of correct predictions made by the model.

$$Accuracy = \frac{Correct\ Predictions}{Total\ Predictions}$$

**39. What is precision?**
Correct positive predictions out of total predicted positives.

$$Precision = \frac{TP}{TP + FP}$$

**40. What is recall?**
Correct positive predictions out of actual positives.

$$Recall = \frac{TP}{TP + FN}$$

**41. What is F1-score?**
Combination of precision and recall.

$$F1\ Score = 2 \times \frac{Precision \times Recall}{Precision + Recall}$$

---

## Experiment 5: K-Nearest Neighbor (KNN)

**37. What is KNN?**
KNN stands for K-Nearest Neighbor. It is a supervised machine learning algorithm used for classification and prediction.

**38. How does KNN work?**
KNN finds the nearest data points and predicts the class based on majority voting.

**39. What does "K" mean in KNN?**
"K" represents the number of nearest neighbors considered.

**40. Why is KNN called a lazy learner?**
Because it does not train the model immediately and stores the dataset.

**41. Which distance formula is commonly used in KNN?**
Euclidean distance.

**42. What is Euclidean distance?**

$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

**44. What if K = 1?**
Prediction depends on only one nearest neighbor.

**47. What happens if K value is very small?**
Model may become sensitive to noise.

**48. What happens if K value is very large?**
Model accuracy may decrease.

**49. What is accuracy in KNN?**
Accuracy is the percentage of correctly predicted values.

**50. Which library is used for KNN in Python?**
Scikit-learn library.

**51. What is NumPy?**
NumPy is a Python library used for numerical operations.

**52. What is Scikit-learn?**
Scikit-learn is a machine learning library in Python.

**57. What is visualization in ML?**
Visualization helps understand patterns and relationships in data through graphs.

---

## Experiment 6: Kernel SVM Algorithm

**1. What is SVM?**
SVM stands for Support Vector Machine. It is a supervised machine learning algorithm used for classification and regression.

**2. What is the main goal of SVM?**
The main goal is to find the best boundary (hyperplane) that separates classes.

**3. What is a hyperplane?**
A hyperplane is a decision boundary used to separate different classes.

**4. What are support vectors?**
Support vectors are the data points closest to the hyperplane.

**5. Why is SVM called a powerful classifier?**
Because it works well for high-dimensional and complex datasets.

**6. What is Kernel in SVM?**
Kernel is a function used to transform non-linear data into higher dimensions.

**7. Types of kernels in SVM?**
- Linear Kernel
- Polynomial Kernel
- RBF Kernel
- Sigmoid Kernel

**8. What is Linear Kernel?**
Used when data can be separated with a straight line.

**9. What is RBF Kernel?**
RBF (Radial Basis Function) is used for non-linear classification problems.

**12. What is classification in SVM?**
Assigning data into different categories or classes.

**13. Which library is used for SVM in Python?**
Scikit-learn.

**14. What is supervised learning?**
Learning using labeled data.

**15. Why do we scale data in SVM?**
Because SVM is sensitive to feature values and scaling improves accuracy.

**47. What is margin in SVM?**
Distance between hyperplane and nearest data points.

**48. What is soft margin?**
Allows small classification errors.

**49. What is hard margin?**
No errors allowed during classification.

---

## Experiment 7: Random Forest

**16. What is Random Forest?**
Random Forest is a supervised learning algorithm that uses multiple decision trees.

**17. Why is it called Random Forest?**
Because it creates many random decision trees and combines their outputs.

**18. What is a Decision Tree?**
A tree-like model used for decision-making and classification.

**19. How does Random Forest work?**
It creates many decision trees and takes the majority vote for prediction.

**20. What is ensemble learning?**
Combining multiple models to improve accuracy.

**23. What is overfitting?**
When the model performs well on training data but poorly on new data.

**24. How does Random Forest reduce overfitting?**
By averaging results from multiple trees.

**25. What is feature importance?**
It shows which features are most useful for prediction.

**26. Is Random Forest supervised or unsupervised?**
Supervised learning algorithm.

**28. Which Python library is used for Random Forest?**
Scikit-learn.

**29. Difference between Decision Tree and Random Forest?**
- Decision Tree uses one tree
- Random Forest uses many trees

**30. What type of problems can Random Forest solve?**
Both classification and regression problems.

**50. What is Boosting?**
Boosting is a technique where models learn from previous mistakes to improve accuracy step by step.

**51. What is Bagging?**
Combining results of many models together.

**Difference between Bagging and Boosting?**
Bagging trains models separately, while Boosting improves mistakes one by one.

**52. Why is Random Forest better than Decision Tree?**
Because it gives more accurate results and reduces overfitting.

---

## Experiment 8: K-Means Clustering

**31. What is clustering?**
Clustering means grouping similar data points together.

**32. What is K-Means Clustering?**
K-Means is an unsupervised learning algorithm used to divide data into clusters.

**33. What does "K" represent in K-Means?**
"K" represents the number of clusters.

**34. What is centroid in K-Means?**
Centroid is the center point of a cluster.

**35. Steps of K-Means algorithm?**
1. Select K clusters
2. Choose centroids
3. Assign points to nearest centroid
4. Update centroids
5. Repeat until convergence

**36. What is unsupervised learning?**
Learning without labeled output data.

**37. Difference between supervised and unsupervised learning?**
- Supervised → labeled data
- Unsupervised → unlabeled data

**38. What is inertia in K-Means?**
It measures how close data points are to their centroid.

**39. What is the Elbow Method?**
A method used to find the optimal value of K.

**40. Why is it called the Elbow Method?**
Because the graph looks like an elbow shape.

**44. What is a cluster?**
A group of similar data points.

**45. Which library is used for K-Means in Python?**
Scikit-learn.

---

## Experiment 9: Hierarchical Agglomerative Clustering

**46. What is Hierarchical Clustering?**
It is an unsupervised learning method that creates clusters in a hierarchy.

**47. What is Agglomerative Clustering?**
A bottom-up clustering approach where small clusters merge into bigger clusters.

**48. How does Agglomerative Clustering work?**
Initially each point is a separate cluster, then nearest clusters are merged step by step.

**49. What is a dendrogram?**
A tree-like diagram showing cluster formation.

**50. What is the use of dendrogram?**
It helps decide the number of clusters.

**51. Difference between K-Means and Hierarchical Clustering?**
- K-Means needs predefined K
- Hierarchical does not require predefined K initially

**52. What are linkage methods?**
Methods used to measure distance between clusters.

**53. Types of linkage methods?**
- Single linkage
- Complete linkage
- Average linkage
- Ward linkage

**54. What is single linkage?**
Distance between nearest points of two clusters.

**55. What is complete linkage?**
Distance between farthest points of two clusters.

**59. Is hierarchical clustering supervised or unsupervised?**
Unsupervised learning.
