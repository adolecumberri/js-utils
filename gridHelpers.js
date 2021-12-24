loadBoxDimensions = () => {
    if (t_width % cols || t_height % (rows + cellsInWall))
      throw new Error(
        `Error creating game grid: 
        Please ensure that the desired column and row counts divide evenly into the total width and height of the level!
        ${t_width} / ${cols} = ${t_width/cols}.
        ${t_width} % ${cols} = ${t_width%cols}.
        ${t_height} / ${rows} = ${t_height/rows}.
        ${t_height} % ${rows} = ${t_height%rows}.
        `
      );

    let width = t_width / cols;
    let height = t_height / (rows + cellsInWall);

    return { width, height }
  }
