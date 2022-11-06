import numpy as np
import cv2

def areaFilter(minArea, inputImage):

    # Perform an area filter on the binary blobs:
    componentsNumber, labeledImage, componentStats, componentCentroids = \
cv2.connectedComponentsWithStats(inputImage, connectivity=4)

    # Get the indices/labels of the remaining components based on the area stat
    # (skip the background component at index 0)
    remainingComponentLabels = [i for i in range(1, componentsNumber) if componentStats[i][4] >= minArea]

    # Filter the labeled pixels based on the remaining labels,
    # assign pixel intensity to 255 (uint8) for the remaining pixels
    filteredImage = np.where(np.isin(labeledImage, remainingComponentLabels) == True, 255, 0).astype('uint8')

    return filteredImage

path = "src//main//resources//static//"
fileName = "output.jpg"

inputImage = cv2.imread(path + fileName)
inputCopy = inputImage.copy()

# The HSV mask values:
lowerValues = np.array([100, 50, 50])
upperValues = np.array([255, 255, 255])
lvColors = [np.array([100, 50, 50]), np.array([0, 100, 0]), np.array([70, 50, 50])]
uvColors = [np.array([230, 255, 255]), np.array([144, 238, 144]), np.array([100, 255, 255])]
type = ['H', 'P', 'T']
# Convert the image to HSV:
hsvImage = cv2.cvtColor(inputImage, cv2.COLOR_BGR2HSV)
arr = []
for i in range(len(lvColors)):


    lowerValues = lvColors[i]
    upperValues = uvColors[i]
    # Create the HSV mask
    mask = cv2.inRange(hsvImage, lowerValues, upperValues)

    # Run a minimum area filter:
    minArea = 50
    mask = areaFilter(minArea, mask)

    # Pre-process mask:
    kernelSize = 3

    structuringElement = cv2.getStructuringElement(cv2.MORPH_RECT, (kernelSize, kernelSize))
    iterations = 2

    mask = cv2.morphologyEx(mask, cv2.MORPH_DILATE, structuringElement, None, None, iterations, cv2.BORDER_REFLECT101)
    mask = cv2.morphologyEx(mask, cv2.MORPH_ERODE, structuringElement, None, None, iterations, cv2.BORDER_REFLECT101)

    # Find the big contours/blobs on the filtered image:
    contours, hierarchy = cv2.findContours(mask, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_SIMPLE)

    # Store the poly approximation and bound
    contoursPoly = [None] * len(contours)

    # Store the corners of the square here:
    detectedCorners = []
    #print(contours)
    # Look for the outer bounding boxes:
    for _, c in enumerate(contours):

        # Approximate the contour to a polygon:
        contoursPoly = cv2.approxPolyDP(c, 3, True)

        # Convert the polygon to a bounding rectangle:
        boundRect = cv2.boundingRect(contoursPoly)

        # Get the bounding rect's data:
        rectX = boundRect[0]
        rectY = boundRect[1]
        rectWidth = boundRect[2]
        rectHeight = boundRect[3]

        # Calculate the rect's area:
        rectArea = rectWidth * rectHeight
       # print(rectX)
        # Calculate the aspect ratio:
        aspectRatio = rectWidth / rectHeight
        delta = abs(1.0 - aspectRatio)

        # Set the min threshold values to identify the
        # blob of interest:
        minArea = 2500
        epsilon = 0.2
        #print(rectArea, minArea, delta, epsilon)
        if rectArea > minArea:

            # Compute the corners/vertices:
            # Corner 1 (top left)
            corner1 = (rectX, rectY)
            detectedCorners.append(corner1)
            # Corner 2 (top right)
            corner2 = (rectX + rectWidth, rectY)
            detectedCorners.append(corner2)
            # Corner 3 (bottom left)
            corner3 = (rectX, rectY + rectHeight)
            detectedCorners.append(corner3)
            # Corner 4 (bottom right)
            corner4 = (rectX + rectWidth, rectY + rectHeight)
            detectedCorners.append(corner4)

            # Draw the corner points:
            for p in detectedCorners:
                color = (0, 0, 255)
                cv2.circle(inputCopy, (p[0], p[1]), 5, color, -1)

            #cv2.imshow("Square Corners", inputCopy)
            #cv2.waitKey(0)
            arr.append([int(rectX + rectWidth/2), int(rectY + rectHeight/2), rectHeight, rectWidth, type[i]])
    #print(arr)
arr2 = []
for j in range(len(arr)):
    if (not (j > 0 and arr[j][4] == arr[j - 1][4] and abs(arr[j][0] - arr[j - 1][0]) < 50)):
        arr2.append(arr[j])
#print(arr2)
##arr2 = arr
file = open("src//main//resources//static//site_mockup.txt", "w")
print(len(arr))
for i in range(len(arr2)):
        file.write(str(arr2[i][0]) + " " + str(arr2[i][1]) + " " +
                   str(arr2[i][2]) + " " +
                   str(arr2[i][3]) + " " +
                   str(arr2[i][4]) + " " + "\n")


